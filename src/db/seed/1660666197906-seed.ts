import { LoginEntity } from "../../user/entity/login.entity";
import { UserEntity } from "../../user/entity/user.entity";
import { MigrationInterface, QueryRunner } from "typeorm"
import { AdminEntity } from "../../user/entity/admin.entity";

export class seed1660666197906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const login = await queryRunner.manager.save(
            queryRunner.manager.create<LoginEntity>(LoginEntity, {
                login: '0001',
                pwd: 'asd',
                type: "A",
            }),
        );
        await queryRunner.manager.save(
            queryRunner.manager.create<AdminEntity>(AdminEntity, {
                name: "gozu",
                created_at: new Date().toISOString(),
                login: login
            }),)
        const login2 = await queryRunner.manager.save(
            queryRunner.manager.create<LoginEntity>(LoginEntity, {
                login: 'pepeelbueno',
                pwd: 'asd',
                type: "U",
            }),
        );
        await queryRunner.manager.save(
            queryRunner.manager.create<UserEntity>(UserEntity, {
                name: "pepito",
                created_at: new Date().toISOString(),
                login: login2
            }),)
        await queryRunner.query(`
        insert into product (name, description, category, created_at) values ('Doilies - 7, Paper', 'sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis', 'fruta', '2021-11-02T21:06:48Z');
insert into product (name, description, category, created_at) values ('Chips Potato Salt Vinegar 43g', 'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien', 'verdura', '2022-06-02T04:40:21Z');
insert into product (name, description, category, created_at) values ('Beer - Tetleys', 'quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante', 'verdura', '2022-07-31T18:49:17Z');
insert into product (name, description, category, created_at) values ('Pork - Bacon, Double Smoked', 'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris', 'fruta', '2022-06-24T21:55:45Z');
insert into product (name, description, category, created_at) values ('Ecolab - Hand Soap Form Antibac', 'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper', 'verdura', '2022-03-21T13:11:17Z');
insert into product (name, description, category, created_at) values ('Tea Peppermint', 'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede', 'verdura', '2022-04-29T18:23:34Z');
insert into product (name, description, category, created_at) values ('Garbage Bags - Black', 'nam congue risus semper porta volutpat quam pede lobortis ligula', 'verdura', '2022-02-14T12:55:52Z');
insert into product (name, description, category, created_at) values ('Flour Pastry Super Fine', 'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices', 'verdura', '2021-09-09T18:00:54Z');
insert into product (name, description, category, created_at) values ('Chicken - Leg, Fresh', 'diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec', 'fruta', '2021-10-11T01:17:28Z');
insert into product (name, description, category, created_at) values ('Mousse - Banana Chocolate', 'justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit', 'verdura', '2021-10-25T11:26:55Z');
insert into product (name, description, category, created_at) values ('Prunes - Pitted', 'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id', 'fruta', '2022-04-02T16:48:36Z');
insert into product (name, description, category, created_at) values ('Potatoes - Mini White 3 Oz', 'rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel', 'fruta', '2022-03-19T02:07:27Z');
insert into product (name, description, category, created_at) values ('Apricots Fresh', 'erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam', 'fruta', '2022-03-02T03:37:20Z');

        `)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
