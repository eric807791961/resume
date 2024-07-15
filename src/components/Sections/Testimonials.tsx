import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import {Testimonial as TestimonialType} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();
  const {imageSrc, testimonials} = testimonial;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  // Update item width based on container width
  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  // Update active index based on scroll position
  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setTestimonial = useCallback((index: number) => () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = itemWidth.current * index;
    }
  }, []);

  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 5000);

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined}>
        <div className="z-10 w-full max-w-screen-xl px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <Testimonial
                    isActive={isActive}
                    key={`${testimonial.name}-${index}`}
                    testimonial={testimonial}
                  />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});


const Testimonial: FC<{ testimonial: TestimonialType; isActive: boolean }> = memo(
  ({testimonial: {image, url, summary}, isActive}) => {
    const isMobile = false; // Assuming you have a way to determine this

    return (
      <div
        className={classNames(
          'relative w-full h-full transition-opacity duration-1000',
          isActive ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          width: '80vw', // Fixed width relative to viewport width
          height: '50vh', // Fixed height relative to viewport height
        }}
      >
        <div
          className="relative h-full w-full bg-cover bg-center transition-opacity duration-300"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <a
            className={classNames(
              'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
              {'opacity-0 hover:opacity-80': !isMobile},
              'opacity-0',
            )}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative h-full w-full p-4">
              <div className="flex h-full w-full flex-col gap-y-2 items-center justify-center">
                <p className="text-xs italic text-white opacity-0 hover:opacity-100 sm:text-sm md:text-base lg:text-lg">
                  {summary}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  },
);
export default Testimonials;
