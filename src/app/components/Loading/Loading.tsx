import React from "react";
import style from "./Loading.module.scss"

export const Loading: React.FC = () => {
    return (
        <div className={style.loadingPosition}>
            Loading
            <div className={style.ldsellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}