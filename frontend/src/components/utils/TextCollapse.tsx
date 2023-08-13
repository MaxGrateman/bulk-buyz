import React, {useState} from 'react';

const TextCollapse = ({text, maxLength} : any) => {
    const isLongText = text.length > maxLength;
    const [expanded, setExpended] = useState(false)

    const toggleText = () => {
        setExpended(!expanded)
    }

    return (
        <div className="comment_text">
            {isLongText && !expanded ? (
                <div>
                    <p>{`${text.slice(0, maxLength)}...`}</p>
                    <button onClick={toggleText} className="comment_more">
                        Читать дальше
                    </button>
                </div>
            ) : (
                <div>
                    <p>{text}</p>
                    {isLongText && (
                        <button onClick={toggleText} className="comment_more">
                            Скрыть текст
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TextCollapse;