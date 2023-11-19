
type Mods = Record<string, boolean | string>

// cls - это главный class например app
// mods - это объект с модами это объект у которого как ключ идет название класса, а как значения bool
// additional - это массив каких-то дополнительных классов
// пример classNames('remove-btn', {hovered: true, select: true}, ['withPadding'])
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, values]) => className)
    ]
        .join(' ')
}