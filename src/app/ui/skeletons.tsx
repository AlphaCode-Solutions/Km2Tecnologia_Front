//loading skeleton animation
import React from "react"
import ContentLoader from "react-content-loader"

export default function RegisterSkeleton() {
    return (
        <ContentLoader
            speed={2}
            width={859}
            height={716}
            viewBox="0 0 859 716"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="63" y="26" rx="3" ry="3" width="130" height="23" />
            <circle cx="39" cy="36" r="20" />
            <rect x="21" y="69" rx="3" ry="3" width="65" height="23" />
            <rect x="21" y="96" rx="3" ry="3" width="556" height="61" />
            <rect x="20" y="164" rx="3" ry="3" width="65" height="23" />
            <rect x="22" y="451" rx="3" ry="3" width="150" height="23" />
            <rect x="21" y="356" rx="3" ry="3" width="92" height="23" />
            <rect x="21" y="260" rx="3" ry="3" width="65" height="23" />
            <rect x="21" y="477" rx="3" ry="3" width="65" height="23" />
            <rect x="201" y="474" rx="3" ry="3" width="65" height="23" />
            <rect x="386" y="474" rx="3" ry="3" width="65" height="23" />
            <rect x="21" y="192" rx="3" ry="3" width="556" height="61" />
            <rect x="20" y="287" rx="3" ry="3" width="556" height="61" />
            <rect x="21" y="383" rx="3" ry="3" width="556" height="61" />
            <rect x="21" y="568" rx="3" ry="3" width="556" height="61" />
            <rect x="22" y="506" rx="0" ry="0" width="177" height="52" />
            <rect x="210" y="505" rx="0" ry="0" width="177" height="52" />
            <rect x="398" y="505" rx="0" ry="0" width="177" height="52" />
        </ContentLoader>
    )
}