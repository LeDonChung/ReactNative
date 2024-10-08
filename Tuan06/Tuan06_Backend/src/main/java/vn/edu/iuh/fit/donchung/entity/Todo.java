package vn.edu.iuh.fit.donchung.entity;

import jakarta.persistence.*;
import lombok.*;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "todos")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "is_completed", columnDefinition = "boolean default false")
    private boolean completed;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Account user;
}
