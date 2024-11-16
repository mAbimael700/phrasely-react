import { useAppDispatch } from '../redux/reduxHooks';
import { registerTeacher, registerGuest } from '../redux/slices/userSlice';
import { Teacher, Guest } from '../types/userType';

export const useUser = () => {
    const dispatch = useAppDispatch();

    const registerNewTeacher = (teacher: Teacher) => {
        dispatch(registerTeacher(teacher));
    };

    const registerNewGuest = (guest: Guest) => {
        dispatch(registerGuest(guest));
    };

    return {
        registerNewTeacher,
        registerNewGuest,
    };
};
