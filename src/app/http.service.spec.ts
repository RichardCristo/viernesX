import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
