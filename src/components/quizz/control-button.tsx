

interface CustomButtonProps {
    onClick: () => void;
    icon?: React.ReactNode;
    className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, icon, className }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center rounded-lg bg-[#594668] border border-[#AA85C6] px-3 py-4 text-sm font-semibold text-gray-100 shadow-lg hover:bg-[#594668] ${className} bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg`}
            type="button"
        >
            {icon && <span className="mr-2">{icon}</span>}
        </button>
    );
};

