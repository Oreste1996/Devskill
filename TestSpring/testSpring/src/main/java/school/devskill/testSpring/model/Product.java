package school.devskill.testSpring.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column(nullable = false, length =20)
    private String name;

    @Column(nullable = false , length =20)
    private String title;

    @Column(nullable = true , length =100)
    private String description;

    @Column(nullable = true , length =100)
    private String dimension;
}
