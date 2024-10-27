package Back.videos.entity.DTO;

import Back._config.Enums.Genres;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serial;

@Data
public class videoDTO {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long idVideo;
    private String name;
    private Genres genres;
}
