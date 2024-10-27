package Back.videos.repository;

import Back.videos.entity.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface videoRepository extends JpaRepository<Video, Long> {
}
