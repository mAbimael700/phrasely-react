import { useAppDispatch } from '../redux/reduxHooks';
import { registerTeacher, registerGuest, removeGuest, resetUser } from '../redux/slices/userSlice';
import { Teacher, Guest } from '../types/userType';

export const useUser = () => {
    const dispatch = useAppDispatch();

    const registerNewTeacher = (teacher: Teacher) => {
        dispatch(registerTeacher(teacher));
    };

    const registerNewGuest = (guest: Guest) => {
        dispatch(registerGuest(guest));
    };

    const deleteGuest = (id: string) => {
        dispatch(removeGuest(id));
    };

    const Logout = () => {
        dispatch(resetUser());
    }

    return {
        registerNewTeacher,
        registerNewGuest,
        deleteGuest,
        Logout
    };
};
