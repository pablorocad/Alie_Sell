create table CLASE_CLIENTE(
ID_CLASE_CLIENTE int generated always as identity primary key,
TIPO varchar(3),
CREDITO int
);


create TABLE USUARIO(
ID_USUARIO INT generated always as identity PRIMARY KEY,
NOMBRE VARCHAR(15) NOT NULL,
APELLIDO VARCHAR(15) NOT NULL,
CONTRASENIA VARCHAR(25) NOT NULL,
CORREO VARCHAR(40) NOT NULL,
TELEFONO VARCHAR(10),
FOTO_USUARIO VARCHAR(200),
GENERO VARCHAR(1) NOT NULL,
FECHA_NACIMIENTO DATE NOT NULL,
FECHA_REGISTRO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
DIRECCION VARCHAR(100),
CREDITO_DISPONIBLE INT,
GANANCIA INT,
CLASE_CLIENTE int,
TIPO_USUARIO int not null,
ESTADO int not null,

constraint FK_CLASE_CLIENTE foreign key(CLASE_CLIENTE) references CLASE_CLIENTE(ID_CLASE_CLIENTE)
);


create table BITACORA_ADMIN(
ID_ACCION int generated always as identity primary key,
ACCION varchar(250) not null,
fecha_accion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ID_USUARIO int not null,
constraint FK_ID_USUARIO_BITACORA foreign key(ID_USUARIO) references USUARIO(ID_USUARIO)
);

create table CHAT_AYUDA(
ID_CHAT_AYUDA int generated always as identity primary key,
ID_USUARIO int not null,
ID_SERVIDOR int not null,
TEMA varchar(200) not null,
ESTADO int not null,
PUNTUACION int not null,

constraint FK_ID_USUARIO_CHAT foreign key(ID_USUARIO) references USUARIO(ID_USUARIO),
constraint FK_ID_SERVIDOR_CHAT foreign key(ID_SERVIDOR) references USUARIO(ID_USUARIO)
);

create table MENSAJE_CHAT(
ID_MENSAJE int generated always as identity primary key,
CONTENIDO varchar(250) not null,
FECHA_MENSAJE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ID_CHAT_AYUDA int not null,

constraint FK_ID_CHAT_AYUDA foreign key(ID_CHAT_AYUDA) references CHAT_AYUDA(ID_CHAT_AYUDA)
);

create table CARRO_COMPRA(
ID_CARRO int generated always as identity primary key,
TOTAL int not null,
ID_USUARIO int not null,

constraint FK_ID_USUARIO_CARRO_COMPRA foreign key(ID_USUARIO) references USUARIO(ID_USUARIO)
);

create table CATEGORIA(
ID_CATEGORIA int generated always as identity primary key,
NOMBRE varchar(20) not null,
DESCRIPCION varchar(200),
ID_CATEGORIA_PADRE int,

constraint FK_ID_CATEGORIA_PADRE foreign key(ID_CATEGORIA_PADRE) references CATEGORIA(ID_CATEGORIA)
);

create table PRODUCTO(
ID_PRODUCTO int generated always as identity primary key,
IMAGEN varchar(200) not null,
DESCRIPCION varchar(200) not null,
PRECIO int not null,
FECHA_PUBLICACION TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CANTIDAD_DISPONIBLE INT not null,
ID_CATEGORIA int not null,

constraint FK_ID_CATEGORIA foreign key(ID_CATEGORIA) references CATEGORIA(ID_CATEGORIA)
);

create table COLOR(
ID_COLOR int generated always as identity primary key,
NOMBRE varchar(20)
);

create table COLOR_PRODUCTO(
ID_COLOR int not null,
ID_PRODUCTO int not null,

constraint FK_ID_COLOR_CP foreign key(ID_COLOR) references COLOR(ID_COLOR),
constraint FK_ID_PRODUCTO_CP foreign key(ID_PRODUCTO) references PRODUCTO(ID_PRODUCTO),

PRIMARY KEY(ID_COLOR,ID_PRODUCTO)
);


create table COMENTARIO(
ID_COMENTARIO int generated always as identity primary key,
NOMBRE_AUTOR varchar(15),
FECHA_PUBLICACION TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
TITULO varchar(20) not null,
PONDERACION int not null,
CONTENIDO varchar(250),
ID_PRODUCTO int not null,

constraint FK_ID_PRODUCTO_COMENTARIO foreign key(ID_PRODUCTO) references PRODUCTO(ID_PRODUCTO)
);

create table PRODUCTO_COMPRA(
ID_PRODUCTO int not null,
ID_CARRO_COMPRA int not null,
CANTIDAD int not null,

constraint FK_ID_PRODUCTO_PROCOMP foreign key(ID_PRODUCTO) references PRODUCTO(ID_PRODUCTO),
constraint FK_ID_CARRO_COMPRA_PROCOMP foreign key(ID_CARRO_COMPRA) references CARRO_COMPRA(ID_CARRO),

primary key(ID_PRODUCTO,ID_CARRO_COMPRA)
);











