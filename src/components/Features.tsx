import { useState, useRef } from "react";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
}

const features: Feature[] = [
    {
      title: "Crowded Map",
      description:
        "Visualize real-time congestion and density with Crowded Map. Navigate smarter by avoiding congested areas and optimize your travel time with ease.",
      type: "image",
      path: "https://i.ibb.co/Gfgjv3Xt/image.png",
    },
    {
      title: "Analytics",
      description:
        "Gain insights on times of high congestion with Analytics. Plan your trips more efficiently and stay ahead of the curve with data-driven decisions.",
      type: "image",
      path: "https://i.ibb.co/Gfgjv3Xt/image.png",
      alt: "A computer",
    },
    {
      title: "History",
      description:
        "Are able to see past congestions and density with History. Be able to predict what times tend to be less congested with our History feature.",
      type: "image",
      path: "https://i.ibb.co/Gfgjv3Xt/image.png",
      alt: "A computer",
    },
    {
      title: "AI Export",
      description:
        "Leverage the power of AI to export congested data. ",
        type: "image",
        path: "https://i.ibb.co/Gfgjv3Xt/image.png",
        alt: "A computer",
    },
  ];
  

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  index,
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef<HTMLDivElement>(null);
  const { title, description } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base text-gray-400 font-medium text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-gray-400" : ""}`}
        >
          <span className={`mr-2`}>{index + 1}.</span>
          <h3 className="inline">{title}</h3>
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current ${isOpen ? "fill-primary" : ""
            }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"
              }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 text-gray-400 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};


const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style =
    "rounded-lg  w-full sm:w-[30rem] border border-base-content/10";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <img
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};


const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="py-24 !font-inter md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <p className=" text-gray-400 text-accent mb-2">
          There&apos;s a better way
        </p>
        <h2 className="font-extrabold text-[#cdd3d1] text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          All you need to arrive on time.
        </h2>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;