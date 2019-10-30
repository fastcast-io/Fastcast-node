export interface IImgSizing {
    styles : {
        height: string,
        width: string
    }
}

export interface IActionCardProp {
    IconComponent: JSX.Element,
    Styles: {
        width: string,
        height: string
    },
    Format: "big" | "normal",
    TextValue: string
}

export interface IActionSectionProp {
    SectionTitle: string,
    ActionCards: Array<IActionCardProp>
}