import * as bcrypt from 'bcrypt'
export class Encript {
    public static async comparePWD(currentPWD: string, userPWD: string): Promise<boolean> {
        return await bcrypt.compare(currentPWD, userPWD);
    }
}