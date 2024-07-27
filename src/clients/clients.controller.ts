import { Controller, Get } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
    
    @Get('')
    async getClients(){
        return {
            'name':'Diego Axsel',
            'userName':'DiegoA',
            'address':'carrera 5 #5 -33',
            'email':'axlyeyo2000@gmail.com'
        }
    }
}
