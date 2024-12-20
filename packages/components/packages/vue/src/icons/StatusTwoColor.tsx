/**
 * @file StatusTwoColor 状态圆点
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import {ISvgIconProps, IconHelper, IconWrapper} from '../runtime';

export default IconWrapper(
    'status-two-color',
    true,
    (h: IconHelper, props: ISvgIconProps) => (
        <svg
            fill="none"
            width={props.size}
            height={props.size}
            viewBox="0 0 12 12"
        >
            <g>
                <g>
                    <ellipse
                        cx="6"
                        cy="6"
                        rx="6"
                        ry="6"
                        fill={props.colors[0]}
                        fill-opacity="1"
                    />
                </g>
                <g>
                    <ellipse
                        cx="6"
                        cy="6"
                        rx="3"
                        ry="3"
                        fill={props.colors[1]}
                        fill-opacity="1"
                    />
                </g>
            </g>
        </svg>
    )
);
