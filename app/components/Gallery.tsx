import { useState } from "react";

import { RowsPhotoAlbum, MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

// optional lightbox plugins
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery({ className = "", gallery = [] }) {
  if (!gallery.length) return null;

  const [index, setIndex] = useState(-1);

  const photos = gallery.map((img) => ({
    src: `/api/_plugin/image/optimize/${encodeURIComponent(img?.path)}?width=960&fit=scale-down`,
    width: img.metadata.width,
    height: img.metadata.height,
    alt: "",
  }));

  return (
    <div className={className}>
      <MasonryPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[]}
      />
    </div>
  );
}
