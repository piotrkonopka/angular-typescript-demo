import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataService } from '../../../services/in-memory-data.service';

describe('InMemoryDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InMemoryDataService]
        });
    });

    it('should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
        expect(service).toBeTruthy();
    }));

    it('database "dictionary" should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
        let db = service.createDb();
        expect(db.dictionary).toBeTruthy();
    }));
});
