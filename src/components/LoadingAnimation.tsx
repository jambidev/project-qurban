import React, { useEffect, useState } from "react";

interface LoadingAnimationProps {
  duration?: number;
  onComplete?: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  duration = 3000,
  onComplete,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-dark">
      <img
        src="/assets/favicon.png"
        alt="Kandang Surya Ternak Logo"
        className="w-40 h-40 mb-8 animate__animated animate__pulse animate__infinite"
      />
      <div className="text-4xl font-bold text-white tracking-wider animate__animated animate__fadeIn animate__delay-1s">
        <span className="animate__animated animate__fadeInUp animate__delay-1s inline-block">
          S
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.1s" }}
        >
          u
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.2s" }}
        >
          r
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.3s" }}
        >
          y
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.4s" }}
        >
          a
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.5s" }}
        >
          {" "}
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.6s" }}
        >
          T
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.7s" }}
        >
          e
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.8s" }}
        >
          r
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "1.9s" }}
        >
          n
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "2.0s" }}
        >
          a
        </span>
        <span
          className="animate__animated animate__fadeInUp animate__delay-1s inline-block"
          style={{ animationDelay: "2.1s" }}
        >
          k
        </span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
