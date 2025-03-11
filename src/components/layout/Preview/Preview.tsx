import './preview.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { OptionContext } from '../../../Contexts/OptionContext';
import { motion } from 'framer-motion';

const Preview = () => {
    const {
        backgroundColor,
        backgroundType,
        visualizerColor,
        backgroundImage,
        width,
        height,
    } = useContext(OptionContext);

    const containerRef = useRef<HTMLDivElement>(null);
    const [previewStyle, setPreviewStyle] = useState<React.CSSProperties>({});

    // get aspect ratio of preview container
    useEffect(() => {
        const updatePreviewStyle = () => {

            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;
                const containerAspectRatio = containerWidth / containerHeight;

                const previewAspectRatio = width / height;

                console.log('containerAspectRatio:', containerAspectRatio);
                console.log('previewAspectRatio:', previewAspectRatio);
                console.log('containerWidth:', containerWidth);
                console.log('containerHeight:', containerHeight);

                if (containerWidth < width || containerHeight < height) {
                    if (previewAspectRatio > containerAspectRatio) {
                        setPreviewStyle({
                            width: '100%',
                            height: `${(containerWidth / width) * height}px`,
                        });
                    } else {
                        setPreviewStyle({
                            width: `${(containerHeight / height) * width}px`,
                            height: '100%',
                        });
                    }
                } else {
                    setPreviewStyle({
                        width,
                        height
                    });
                }
            }
        }

        updatePreviewStyle();
    }, [width, height]);

    return (
        <motion.div id='preview-container'
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
            }}
            ref={containerRef}
        >
            <div id='background-under' style={{
                ...previewStyle,
            }}>
                <div
                    id='preview'
                    style={{
                        backgroundColor: backgroundType === 'color' ? backgroundColor : 'transparent',
                        backgroundImage: backgroundType === 'image' && backgroundImage ? `url(${URL.createObjectURL(backgroundImage)})` : 'none',
                    }}
                >
                </div>
            </div>
        </motion.div>
    );
}

export default Preview;