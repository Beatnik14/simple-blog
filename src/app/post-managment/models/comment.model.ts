import { HttpResponse } from "@angular/common/http";

export interface Icomment {
    postId?: number;
    name: string;
    email: string;
    body: string;
}

