import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../models/member';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) {
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api}/api/v1/members`);
  }

  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.api}/api/v1/members/${id}`);
  }

  postMember(data): Observable<Member> {
    return this.http.post<Member>(`${environment.api}/api/v1/members`, data);
  }

  putMember(id: string, data): Observable<Member> {
    return this.http.put<Member>(`${environment.api}/api/v1/members/${id}`, data);
  }

  deleteMember(id: string) {
    this.http.delete(`${environment.api}/api/v1/members/${id}`);
  }
}
