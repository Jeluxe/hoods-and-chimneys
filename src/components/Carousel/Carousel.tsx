import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import './Carousel.css'
import {
  ArrowLeft,
  ArrowRight,
} from '../../assets/icons';
import { fisherman, lens, cleaning } from "../../assets/images";

interface CarouselProps {
  imageList?: string[];
}

const Carousel = ({ imageList = [fisherman, lens, cleaning] }: CarouselProps) => {
  const [selected, setSelected] = useState<number>(0);
  const intervalRef = useRef<number>()

  const selectImage = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setSelected(Number(target.id))
  }

  const prevImage = () => {
    resetInterval(() => setSelected(prev => (prev - 1 < 0 ? imageList.length - 1 : prev - 1)));
  }

  const conditionalImageMovement = useCallback(() => {
    setSelected(prev => (prev + 1 > imageList.length - 1 ? 0 : prev + 1));
  }, [imageList]);

  const resetInterval = (fn: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      fn();
    }
    intervalRef.current = setInterval(conditionalImageMovement, 1000 * 4);
  };

  const nextImage = () => {
    resetInterval(conditionalImageMovement)
  }

  useEffect(() => {
    nextImage();

    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-controls">
        <button className="carousel-button prev" onClick={() => prevImage()}><ArrowRight /></button>
        <button className="carousel-button next" onClick={() => nextImage()}><ArrowLeft /></button>
      </div>
      <div className="carousel">
        <img src={imageList[selected]} />
      </div>
      <div className="carousel-navigation">
        {imageList.map((_: string, idx: number) =>
          <div key={idx} id={`${idx}`} className={`carousel-navigation-item ${selected == idx ? "active" : ""}`} onClick={selectImage}></div>
        )}
      </div>
    </div>
  )
};

export default Carousel;