/**
 * @file VolumeMute 静音
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import {ISvgIconProps, IconHelper, IconWrapper} from '../runtime';

export default IconWrapper(
    'volume-mute',
    true,
    (h: IconHelper, props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <rect
                opacity="0.01"
                x="30"
                y="18"
                width="13"
                height="13"
                fill={props.colors[2]}
            />
            <mask
                id={props.id + '07d69e38'}
                maskUnits="userSpaceOnUse"
                x="30"
                y="18"
                width="13"
                height="13" style={{maskType: 'alpha'}}
            >
                <rect
                    x="30"
                    y="18"
                    width="13"
                    height="13"
                    fill={props.colors[2]}
                />
            </mask>
            <g
                mask={'url(#' + props.id + '07d69e38' + ')'}
            >
                <path
                    d="M40.7348 20.2858L32.2495 28.7711"
                    stroke={props.colors[0]}
                    stroke-width={props.strokeWidth}
                    stroke-linecap={props.strokeLinecap}
                    stroke-linejoin={props.strokeLinejoin}
                />
                <path
                    d="M32.2496 20.2858L40.7349 28.7711"
                    stroke={props.colors[0]}
                    stroke-width={props.strokeWidth}
                    stroke-linecap={props.strokeLinecap}
                    stroke-linejoin={props.strokeLinejoin}
                />
            </g>
            <path
                d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
