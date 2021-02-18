import { LoginProps } from "../../../components/loginPage/LoginPage";
import { RegistrationFormProps } from "../../../components/registrationPage/RegistrationPage";
import {
    FetchRegistrationType,
    FetchLoginType,
    SetLoadedActionType,
    SetLoadingActionType,
    SetSubmitLoadingActionType,
    FetchAuthType,
    FetchUploadAvatarType,
    FetchChangeInfoProfileUserType,
    FetchSetShoppingCartIdsType,
    FetchGetShoppingCartType,
    FetchDeleteShoppingCartCourseType,
    FetchPurchasedCoursesType,
    FetchGetPurchasedCoursesType,
    SetLoadingPurchasedCourses,
    FetchVerifyType,
    SetVerifyType,
} from "../user/types";
import { CoursesDataType, UserType } from "./types";
import { LogoutType, SetUserActionType, UserActionType, PurchasedCoursesType, SetPurchasedCourses } from "./types";
import { SetShoppingCartCourses } from "./types";

// FETCH ACTIONS

export const fetchRegistration = (payload: RegistrationFormProps): FetchRegistrationType => ({
    type: UserActionType.FETCH_REGISTRATION,
    payload
});

export const fetchVerify = (payload: string): FetchVerifyType => {
    return {
        type: UserActionType.FETCH_VERIFY,
        payload
    }
};

export const fetchLogin = (payload: LoginProps): FetchLoginType => {
    return {
        type: UserActionType.FETCH_LOGIN,
        payload,
    };
};

export const fetchAuth = (): FetchAuthType => {
    return {
        type: UserActionType.FETCH_AUTH
    }
}

export const fetchUploadAvatar = (payload: File): FetchUploadAvatarType => {
    return {
        type: UserActionType.FETCH_UPLOAD_AVATAR,
        payload
    }
}

export const fetchChangeInfoProfileUser = (payload: { name: string, surname: string, professionalСompetence: string }): FetchChangeInfoProfileUserType => {
    return {
        type: UserActionType.FETCH_CHANGE_INFO_PROFILE_USER,
        payload
    }
}

export const fetchSetShoppingCartIds = (payload: string): FetchSetShoppingCartIdsType => {
    return {
        type: UserActionType.FETCH_SET_SHOPPING_CART_IDS,
        payload
    }
}

export const fetchGetShoppingCart = (): FetchGetShoppingCartType => {
    return {
        type: UserActionType.FETCH_GET_SHOPPING_CART
    }
}

export const fetchDeleteShoppingCartCourse = (payload: string): FetchDeleteShoppingCartCourseType => {
    return {
        type: UserActionType.FETCH_DELETE_SHOPPING_CART,
        payload
    }
}

export const fetchPurchasedCourses = (payload: { ids: string[], totalPrice: number }): FetchPurchasedCoursesType => {
    return {
        type: UserActionType.FETCH_PURCHASED_COURSES,
        payload
    }
}

export const fetchGetPurchasedCourses = (): FetchGetPurchasedCoursesType => {
    return {
        type: UserActionType.FETCH_GET_PURCHASED_COURSES
    }
}

// ACTIONS

export const setVerifyUser = (payload: boolean): SetVerifyType => {
    return {
        type: UserActionType.SET_VERIFY,
        payload
    };
};


export const setUser = (user: UserType): SetUserActionType => {
    return {
        type: UserActionType.SET_USER,
        payload: user,
    };
};

export const logout = (): LogoutType => {
    return {
        type: UserActionType.LOGOUT,
    };
};

export const setUserLoading = (): SetLoadingActionType => {
    return {
        type: UserActionType.SET_LOADING,
    };
};

export const setSubmitLoading = (payload: Boolean ): SetSubmitLoadingActionType => {
    return {
        type: UserActionType.SET_SUBMIT_LOADING,
        payload,
    };
};

export const setUserLoaded = (): SetLoadedActionType => {
    return {
        type: UserActionType.SET_LOADED,
    };
};

export const setShoppingCourses = (courses: CoursesDataType): SetShoppingCartCourses => {
    return {
        type: UserActionType.SET_SHOPPING_CART_COURSES,
        payload: courses,
    };
};

export const setPurchasedCourses = (courses: PurchasedCoursesType[]): SetPurchasedCourses => {
    return {
        type: UserActionType.SET_PURCHASED_COURSES,
        payload: courses,
    };
};

export const setLoadingPurchasedCourses = (): SetLoadingPurchasedCourses => {
    return {
        type: UserActionType.SET_LOADING_PURCHASED_COURSES
    }
}


