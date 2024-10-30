package Back.videos.entity.DTO;

import Back._config.Enums.Genres;
import lombok.Data;

import java.io.Serial;

@Data
public class videoDTO {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long idVideo;
    private String name;
    private Genres genres;
    private String description;




    public Long getIdVideo() {
        return idVideo;
    }

    public void setIdVideo(Long idVideo) {
        this.idVideo = idVideo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Genres getGenres() {
        return genres;
    }

    public void setGenres(Genres genres) {
        this.genres = genres;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
