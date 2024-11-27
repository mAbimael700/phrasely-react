import React, { ChangeEvent } from 'react';

interface TextInputProps {
    placeholderSM: string;
    placeholder: string;
    isInvalid: boolean;
    value: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    fontSize: string;
    marginBottom: string;
}

export const TextInput: React.FC<TextInputProps> = ({
    placeholderSM,
    placeholder,
    isInvalid,
    value,
    type,
    onChange,
    fontSize,
    marginBottom,
}) => {
    const fontSizeNumber = parseInt(fontSize, 10);

    const text = window.innerWidth < 640 ? placeholderSM : placeholder;

    const fontSizes = window.innerWidth < 640 ? `${fontSizeNumber - 18}px` :
                        window.innerWidth < 768 ? `${fontSizeNumber - 13}px` :
                        window.innerWidth < 1024 ? `${fontSizeNumber - 9}px` :
                        `${fontSizeNumber}px`;

    return (
        <div className={`mb-${marginBottom} ${isInvalid ? 'border-red-600' : 'border-orange-800'} border-b-2`}>
            <input
                color='white'
                value={value}
                onChange={onChange}
                type={type}
                placeholder={text}
                className="w-full py-2 px-3 font-montserrat text-orange-800 placeholder-orange-800 bg-transparent font-light border-0 focus:outline-none focus:ring-0 focus:border focus:border-orange-800"
                style={{
                    fontSize: fontSizes,
                }}
                required
            />
        </div>
    );
};
