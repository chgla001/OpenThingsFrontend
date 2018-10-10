import { Folder } from './folder';

export class Folderlist {
    foldername: string;
    children: Array<Folder>;
    open? = false;

    constructor(foldername, children) {
        this.foldername = foldername;
        this.children = children;
    }
};
