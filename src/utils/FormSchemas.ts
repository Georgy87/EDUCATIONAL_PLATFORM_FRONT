import * as yup from "yup";

export const CreateCourseSchema = (setErrorPhotoCourse : (text : string) => void, setErrorVideoCourse : (text : string) => void) => yup.object().shape({
    photoCourse: yup.mixed().test("fileSize", "File Size is too large", (value : any) : any => {
        if (value.length === 0) {
            setErrorPhotoCourse("Добавьте фото к курсу");
        } else {
            setErrorPhotoCourse("");
        }
        return value.length != 0;
    }),

    profession: yup.string().required("Введите профессию"),
    author: yup.string().required("Введите автора"),
    price: yup.string().required("Введите цену"),
    shotDescription: yup.string().required("Введите введите название курса"),
    // fullDescription: yup.string().required("Введите полное описание курса"),

    fileVideo: yup.mixed().required("Добавьте видео к лекции").test("fileSize", "File Size is too large", (value : any) : any => {
        if (value.length === 0) {
            setErrorVideoCourse("Добавьте фото к курсу");
        } else {
            setErrorVideoCourse("");
        }
        return value.length != 0;
    }),
    module: yup.string().required("Введите название модуля"),
    lesson: yup.string().required("Введите название лекции")
});

export const CreateModuleSchema = (setErrorVideoCourse : (text : string) => void) => yup.object().shape({
    fileVideo: yup.mixed().required("Добавьте видео к модулю").test("fileSize", "File Size is too large", (value : any) : any => {
        if (value.length === 0) {
            setErrorVideoCourse("Добавьте видео к модулю");
        } else {
            setErrorVideoCourse("");
        }
        return value.length != 0;
    }),
    module: yup.string().required("Введите название модуля"),
    lesson: yup.string().required("Введите название лекции")
});

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email("Неверная почта").required("Введите почту"),
    password: yup.string().min(6, "​Минимальная длина пароля 6 символов").required()
});

export const RegisterFormSchema = yup.object().shape({
    name: yup.string().required('Введите свое имя'),
    surname: yup.string().required('Введите свою фамилию'),
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Пароли не соответствуют'),
});
