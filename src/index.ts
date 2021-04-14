export enum Mode {
    apnr = 'apnr',
    alphanumeric = 'alphanumeric',
    figs = 'figs',
    figures = 'figures',
    alpha = 'alpha',
    alphabets = 'alphabets',
    as = 'as',
    alphaspecial = 'alphaspecial',
    all = 'all',
}

export interface RAIDMakerOptions {
    no?: number;
    mode?: string | Mode;
    capitals?: boolean;
}

export class RAIDMaker {
    private typeMaps = {
        [Mode.apnr]: this.alphanumericPool,
        [Mode.alphanumeric]: this.alphanumericPool,
        [Mode.figs]: this.numericPool,
        [Mode.figures]: this.numericPool,
        [Mode.alpha]: this.alphabetPool,
        [Mode.alphabets]: this.alphabetPool,
        [Mode.as]: this.specialCharPool,
        [Mode.alphaspecial]: this.specialCharPool,
        [Mode.all]: this.allChars,
    };

    public generate(length?: number, options?: RAIDMakerOptions): string | (string | number)[] | undefined {
        const ids: (string | number)[] = [];
        const no: number = (options && options.no? options.no : 1) as number;
        const mode: string = (options && options.mode ? options.mode : 'alphanumeric') as string;
        const capitalize: boolean = options && options.capitals ?
            options.capitals : false;

        if (length !== undefined) {
            if (length < 1) {
                throw new RangeError('Unexpected Range');
            }
        }

        if (no > 0 && no <= 1) {
            return this.generateId(length || 5, mode, capitalize);
        }

        if (no > 1) {
            for (let i = 0; ids.length < no; i++) {
                ids.push(this.generateId(length || 5, mode, capitalize));
            }

            return ids;
        }
    }

    private generateId(length: number, mode: string, capitalize?: boolean): string {
        const container: (string | number)[] = [];
        const typeMaps: {[key in string]: (capitalize?: boolean) => (string | number)[]} = this.typeMaps;

        while (container.length < length) {
            // TODO ensure apnr contains at least one number
            container.push(
                typeMaps[mode].bind(this, capitalize)()[
                    +[Math.floor(Math.random() * typeMaps[mode].bind(this, capitalize)().length)]
                ]
            );
        }

        return container.join('');
    }

    public allChars(): string[] {
        return [
            ...this.alphanumericPool(),
            ...this.specialCharPool()
        ];
    }
    public specialCharPool(): string[] {
        return ['-', '_', '|', '/', '\\', '$'];
    }


    public alphanumericPool(): string[] {
        return [
            ...this.alphabetPool() as string[],
            ...this.numericPool() as unknown as string[]
        ];
    }

    public numericPool(): number[] {
        return this.generateNumbers();
    }

    public alphabetPool(includeCapitals?: boolean): string[] {
        return [
            ...this.generateAlphabets(),
            ...this.generateAlphabets(includeCapitals)
        ];
    }

    public generateNumbers(stop?: number, start?: number, step?: number): number[] {
        return Array.from({ length: ((stop || 9) - (start || 0)) / (step || 1) + 1}, (_, i): number => (start || 0) + (i * (step || 1)));
    }

    public generateAlphabets(capitalize?: boolean): string[] {
        const a = [];
        let i = 'a'.charCodeAt(0);
        const j = 'z'.charCodeAt(0);

        for (; i <= j; ++i) {
            const char: string = String.fromCharCode(i);
            a.push(capitalize === true ? char.toLocaleUpperCase() : char);
        }

        // console.log(a);

        return a;
    }
}

export default new RAIDMaker();