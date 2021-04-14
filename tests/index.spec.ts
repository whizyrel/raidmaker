import chai, { expect } from 'chai';
const should: Chai.Should = chai.should();
import raidmaker, { Mode } from '../src/index';

describe('Raidmaker Test Suite', (): void => {
    describe('alphanumericPool Method', (): void => {
        const pool = raidmaker.alphanumericPool();

        it('returned value should contain both upper and lower case charactes', (done): void => {
            const result = contansUpperCaseOnly(pool);
            expect(result).to.be.false;
            expect(contansLowerCaseOnly(pool)).to.be.false;
            done();
        });

        it('Should return an Array', (done): void => {
            chai.assert.isArray(pool);
            done();
        });
    });

    describe('alphabetPool Method', (): void => {
        const numbers = raidmaker.generateNumbers(122, 97, 1);
        const _numbers = raidmaker.generateNumbers(90, 65, 1);
        const randomLowerCaseNo = numbers[Math.floor(Math.random() * numbers.length)];
        const randomUpperCaseNo = _numbers[Math.floor(Math.random() * _numbers.length)];
        const randomLowerChar = String.fromCharCode(randomLowerCaseNo);
        const randomUpperChar = String.fromCharCode(randomUpperCaseNo);
        let pool = raidmaker.alphabetPool();

        it('alphabetPool returns an Array', (done): void => {
            chai.assert.isArray(pool);
            done();
        });

        it(`Should contain lower case character (${randomLowerChar}) randomly generated`, (done): void => {
            expect(pool).to.include(randomLowerChar);
            done();
        });

        it(`Should contain upper case character (${randomUpperChar}) randomly generated`, (done): void => {
            pool = raidmaker.alphabetPool(true);
            expect(pool).to.include(randomUpperChar);
            done();
        });
    });

    describe('generateNumbers Method', (): void => {
        it('Should return an Array of numbers', (done): void => {
            const result = raidmaker.generateNumbers();
            const expectedResult = Array.from({ length: ((9 - 0) / 1) + 1}, (_, i): number => (0) + (i * (1)));
            chai.assert.includeOrderedMembers(result, expectedResult);
            expect(result).to.be.an('array').that.is.not.empty;
            done();
        });

        it('Should return an Array that is not empty', (done): void => {
            const result = raidmaker.generateAlphabets();
            expect(result).to.be.an('array').that.is.not.empty;
            done();
        });

        it('Should return an array', (done): void => {
            const result = raidmaker.generateNumbers();
            expect(result).to.be.an('array');
            done();
        });
    });

    describe('generateAlphabets Method', (): void => {
        it('Should return an Array', (done): void => {
            const result = raidmaker.generateAlphabets();
            expect(result).to.be.an('array');
            done();
        });

        it('Should return an Array that is not empty', (done): void => {
            const result = raidmaker.generateAlphabets();
            expect(result).to.be.an('array').that.is.not.empty;
            done();
        });

        it('Should return an Array of lowercase characters', (done): void => {
            const result = raidmaker.generateAlphabets();
            const containsLowercaseChars = contansLowerCaseOnly(result);

            expect(containsLowercaseChars).to.be.true;
            done();
        });

        it('Should return an Array of uppercase characters', (done): void => {
            const result = raidmaker.generateAlphabets(true);
            const containsUppercaseChars = contansUpperCaseOnly(result);

            expect(containsUppercaseChars).to.be.true;
            done();
        });
    });

    describe('generate Method', (): void => {
        it('Should return an array of Alphabets and Numbers', (done): void => {
            const result = raidmaker.generate(10, {no: 2, mode: Mode.apnr});

            const containsAlphas = (result as string[]).every((r): boolean => {
                return r.split('').some((el): boolean => Number.isInteger(el) === false);
            });
            const containsNums = (result as string[]).every((r): boolean => {
                return r.split('').some((el): boolean => Number.isInteger(+el) === true);
            });

            expect(containsAlphas && containsNums).to.be.true;
            done();
        }).timeout(5000);

        it('Should return an Array of Alphabets', (done): void => {
            const result = raidmaker.generate(10, {no: 2, mode: 'apnr'});
            const valid = (result as string[]).every((r): boolean => Number.isInteger(r) === false);

            expect(valid).to.be.true;
            done();
        });

        it('Should return an array of Numbers', (done): void => {
            const result = raidmaker.generate(10, {no: 2, mode: Mode.figs});
            const valid = (result as string[]).every((r): boolean => Number.isInteger(+r));

            expect(valid).to.be.true;
            done();
        });

        it('Should throw an Error - TypeError - for wrong mode specified', (done): void => {
            expect(raidmaker.generate.bind(raidmaker, 10, {mode: 'Mode.apnr'})).to.throw();
            done();
        });

        it('Should throw an Error - RangeError', (done): void => {
            expect(raidmaker.generate.bind(raidmaker, -51)).to
                .throw('Unexpected Range');
            done();
        });

        it(`Generates a string of Characters of length [10]`, (done): void => {
            const id = raidmaker.generate(10);

            expect(id).to.be.length(10, 'String Length matches');
            done();
        });

        it(`Generates an Array of strings containing [3] elements`, (done): void => {
            const ids = raidmaker.generate(10, {no: 3});

            expect(ids).to.be.length(3, 'Array Length matches');
            done();
        });
    });
});

function contansLowerCaseOnly(result: (string | number)[]): boolean {
    return  result.every((char: string | number): boolean => {
        const asciiCode = String(char).charCodeAt(0);
        return asciiCode >= 97 && asciiCode <= 122;
    });
}

function contansUpperCaseOnly(result: (string | number)[]): boolean {
    return result.every((char: string | number): boolean => {
        const asciiCode = String(char).charCodeAt(0);
        return asciiCode >= 65 && asciiCode <= 90;
    });
}