--
-- PostgreSQL database dump
--

-- Dumped from database version 11.7 (Debian 11.7-0+deb10u1)
-- Dumped by pg_dump version 11.7 (Debian 11.7-0+deb10u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: billing_infos; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public.billing_infos (
    id integer NOT NULL,
    billing_adress text NOT NULL,
    billing_city text NOT NULL,
    billing_postal_code integer NOT NULL,
    user_id integer
);


ALTER TABLE public.billing_infos OWNER TO swimtool;

--
-- Name: billing_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.billing_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.billing_infos_id_seq OWNER TO swimtool;

--
-- Name: billing_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.billing_infos_id_seq OWNED BY public.billing_infos.id;


--
-- Name: category; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL
);


ALTER TABLE public.category OWNER TO swimtool;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO swimtool;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: order; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    reference text NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL,
    status text NOT NULL,
    total_price numeric NOT NULL,
    user_id integer
);


ALTER TABLE public."order" OWNER TO swimtool;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_id_seq OWNER TO swimtool;

--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- Name: order_line; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public.order_line (
    id integer NOT NULL,
    line_order integer NOT NULL,
    price_unit numeric NOT NULL,
    quantity integer NOT NULL,
    order_id integer,
    product_id integer
);


ALTER TABLE public.order_line OWNER TO swimtool;

--
-- Name: order_line_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.order_line_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_line_id_seq OWNER TO swimtool;

--
-- Name: order_line_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.order_line_id_seq OWNED BY public.order_line.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    price_ht numeric NOT NULL,
    price_no_rebate numeric NOT NULL,
    brand text NOT NULL,
    quantity integer NOT NULL,
    product_reference text NOT NULL,
    ean integer NOT NULL,
    color text NOT NULL,
    matter text NOT NULL,
    size text NOT NULL,
    size_unit text,
    weight numeric,
    weight_unit text,
    category_id integer
);


ALTER TABLE public.product OWNER TO swimtool;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO swimtool;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: shipping_infos; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public.shipping_infos (
    id integer NOT NULL,
    shipping_adress text NOT NULL,
    shipping_city text NOT NULL,
    shipping_postal_code integer NOT NULL,
    user_id integer
);


ALTER TABLE public.shipping_infos OWNER TO swimtool;

--
-- Name: shipping_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.shipping_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shipping_infos_id_seq OWNER TO swimtool;

--
-- Name: shipping_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.shipping_infos_id_seq OWNED BY public.shipping_infos.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: swimtool
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    date_of_birth date NOT NULL,
    age integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    adress text NOT NULL,
    city text NOT NULL,
    postal_code integer NOT NULL,
    created_at date NOT NULL,
    role text NOT NULL
);


ALTER TABLE public."user" OWNER TO swimtool;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: swimtool
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO swimtool;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: swimtool
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: billing_infos id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.billing_infos ALTER COLUMN id SET DEFAULT nextval('public.billing_infos_id_seq'::regclass);


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: order id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- Name: order_line id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.order_line ALTER COLUMN id SET DEFAULT nextval('public.order_line_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: shipping_infos id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.shipping_infos ALTER COLUMN id SET DEFAULT nextval('public.shipping_infos_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: billing_infos; Type: TABLE DATA; Schema: public; Owner: swimtool
--



--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: swimtool
--

INSERT INTO public.category (id, name, description) VALUES (1, 'accessoire', 'Choisissez parmis un large choix d''accessoires dédiés à la natation');


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: swimtool
--



--
-- Data for Name: order_line; Type: TABLE DATA; Schema: public; Owner: swimtool
--



--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: swimtool
--

INSERT INTO public.product (id, name, description, price_ht, price_no_rebate, brand, quantity, product_reference, ean, color, matter, size, size_unit, weight, weight_unit, category_id) VALUES (1, 'pullboy', 'Le pull boy new generation vous empechera de couler pendant vos tentatives de résolution de bug', 15, 15, 'Arena', 150, 'PB001', 7891234, 'Rose', 'Latex', 'Unique', NULL, NULL, NULL, 1);


--
-- Data for Name: shipping_infos; Type: TABLE DATA; Schema: public; Owner: swimtool
--



--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: swimtool
--

INSERT INTO public."user" (id, firstname, lastname, date_of_birth, age, email, password, adress, city, postal_code, created_at, role) VALUES (4, 'test', 'test', '2019-12-31', 18, 'test@test.com', '$2b$10$AkuWp25dVrF8l11TS8LPse0MeV2swHLfAfgvkJnhBjXRs8YawTajK', '11 rue de lo', 'montpellier', 34000, '2020-08-14', 'membre');
INSERT INTO public."user" (id, firstname, lastname, date_of_birth, age, email, password, adress, city, postal_code, created_at, role) VALUES (5, 'jerry', 'aze', '2019-12-31', 25, 'jerry@jerry.com', '$2b$10$1nIa6B5PAryJY4kqRq5TnOQCgv1J1xJ5fDlNkGezeo2mpBzkbH3um', '11 rue de lo', 'montpellier', 34000, '2020-08-14', 'membre');
INSERT INTO public."user" (id, firstname, lastname, date_of_birth, age, email, password, adress, city, postal_code, created_at, role) VALUES (6, 'virgile', 'virgile', '1990-08-09', 30, 'virgile@gmail.com', '$2b$10$6L/054sG295dpz7BHP4KH.nFn4RGEmFu4P0MUe3Bgrl962NpNqzvu', 'Rue de la grosse chatte', 'Danstoncul', 69696, '2020-08-14', 'admin');
INSERT INTO public."user" (id, firstname, lastname, date_of_birth, age, email, password, adress, city, postal_code, created_at, role) VALUES (7, 'rie', 'rei', '1986-12-24', 30, 'rierei@gmail.com', '$2b$10$FHHRjXrwS.Vgfe1X5I24jOdUPXniEvFXvM6BiKL1Yi0EkuPCyOaOu', '123 rue louiq', 'newyork', 12000, '2020-08-14', 'DANCEUSE ETOILE');
INSERT INTO public."user" (id, firstname, lastname, date_of_birth, age, email, password, adress, city, postal_code, created_at, role) VALUES (8, 'Jean', 'Valjean', '2005-11-05', 36, 'test2@test.com', '$2b$10$YxrsjWb1VwpwJdKsIZVgme34pd.1yw6N2KHeuoVxtQTkN5EcRa1dm', '114 rue de l''imposture', 'Montpellier', 34000, '2020-08-15', 'user');
INSERT INTO public."user" (id, firstname, lastname, date_of_birth, age, email, password, adress, city, postal_code, created_at, role) VALUES (9, 'admin', 'admin', '1950-01-01', 25, 'admin@admin.com', '$2b$10$tYjilb.5mITnKc6jQjhVj.hIXDGp7hQeLxv.OHapvJTLZfSyyVNXe', '10 rue de l''admin', 'Admincity', 34000, '2020-08-15', 'admin');


--
-- Name: billing_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.billing_infos_id_seq', 1, false);


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.category_id_seq', 1, true);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.order_id_seq', 1, false);


--
-- Name: order_line_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.order_line_id_seq', 1, false);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.product_id_seq', 1, true);


--
-- Name: shipping_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.shipping_infos_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: swimtool
--

SELECT pg_catalog.setval('public.user_id_seq', 9, true);


--
-- Name: billing_infos billing_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.billing_infos
    ADD CONSTRAINT billing_infos_pkey PRIMARY KEY (id);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: order_line order_line_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.order_line
    ADD CONSTRAINT order_line_pkey PRIMARY KEY (id);


--
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: shipping_infos shipping_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.shipping_infos
    ADD CONSTRAINT shipping_infos_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: billing_infos billing_infos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.billing_infos
    ADD CONSTRAINT billing_infos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: order_line order_line_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.order_line
    ADD CONSTRAINT order_line_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id);


--
-- Name: order_line order_line_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.order_line
    ADD CONSTRAINT order_line_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: order order_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- Name: shipping_infos shipping_infos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: swimtool
--

ALTER TABLE ONLY public.shipping_infos
    ADD CONSTRAINT shipping_infos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

