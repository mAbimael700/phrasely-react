import { Outlet } from 'react-router-dom'

export const WordlePage = () => {
    return (
        <div className="bg-[#FFA96D] min-h-screen text-primary-foreground flex orange items-center justify-center">
            <Outlet />
        </div>
    )
}
