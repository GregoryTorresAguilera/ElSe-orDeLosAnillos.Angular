export interface CharacterInterface {
    id: number;
    name: string;
    origin: string;
    role: string;
    image: string;
    family: [{
        name: string;
        member: string;
    }]
}