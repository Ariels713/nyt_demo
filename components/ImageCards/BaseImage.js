import styled from "styled-components";
import PropTypes from "prop-types";

function BaseImage({
  src,
  alt,
  width,
  height,
  variant,
  aspect_ratio,
  full_width,
  base_height,
  min_height,
  max_height,
}) {
  let Component;
  if (variant === "base") {
    Component = ImageBase;
  } else if (variant === "full_width") {
    Component = ImageFullWidth;
  } else if (variant === "full_width_aspect_ratio") {
    Component = ImageAspectRatio;
  } else if (variant === "image_grid") {
    Component = ImageGrid;
  } else if (variant === "image_blog") {
    Component = ImageBlog;
  } else {
    throw new Error(
      `Unrecognized Image variant: ${variant}. Head to components/images/imageBase for variants`
    );
  }

  return (
    <>
      <Component
        src={src}
        alt={alt}
        width={width}
        height={height}
        variant={variant}
        aspect_ratio={aspect_ratio}
        full_width={full_width}
        base_height={base_height}
        min_height={min_height}
        max_height={max_height}
      />
    </>
  );
}

const ImageBase = styled.img`
  --ratio-unsupported-height: max(15rem, 25vh);
  aspect-ratio: var(--image-aspect-ratio);
  min-height: ${(props) => `${props.base_height}px`};
  object-fit: cover;
  @supports not (aspect-ratio: 1) {
    height: var(--ratio-unsupported-height) !important;
  }
`;

const ImageFullWidth = styled(ImageBase)`
  width: 100%;
`;

const ImageAspectRatio = styled(ImageBase)`
  aspect-ratio: ${(props) => props.aspect_ratio};
`;

const ImageGrid = styled(ImageBase)`
  aspect-ratio: ${(props) => props.aspect_ratio};
`;

const ImageBlog = styled(ImageBase)`
  max-height: ${(props) => props.max_height};
  min-height: ${(props) => props.min_height};
  justify-self: center;
  grid-column: main;
  justify-self: center;
  grid-column: main;
  object-fit: cover;
  object-position: top center;
`;

BaseImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default BaseImage;
