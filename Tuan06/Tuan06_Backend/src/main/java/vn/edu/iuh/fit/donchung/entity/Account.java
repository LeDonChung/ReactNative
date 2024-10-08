package vn.edu.iuh.fit.donchung.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "accounts")
public class Account {
    @Id
    private String username;

    @Column(name = "url_image", columnDefinition = "text")
    private String urlImage;
}
