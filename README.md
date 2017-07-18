"Zend -1.11"

执行环境：
Apache httpd-2.4.25-x64-vc11
Php    php-5.6.30
Zend   ZendFramework-1.12.11
PostgreSQL

本Demo中使用了Zend的Control，model，DB，layout，model，Plugins，多语言等机能。。

Zend的library需要自己配置。

Demo中使用表参照下面：
CREATE TABLE uac_group
(
  group_id text NOT NULL,
  group_nm_local text,
  group_nm_enus text,
  app_base_cd character varying(10),
  group_comp_id character varying(10) NOT NULL,
  group_org_id character varying(8),
  system_id character varying(4),
  role_id character varying(4),
  group_type text,
  org_type character varying(2),
  group_org_flg boolean,
  group_active boolean,
  mail_address text,
  control_id text,
  expire_date timestamp without time zone,
  member_type character varying(10),
  manage_id text,
  group_note_local character varying(2048),
  group_note_enus character varying(2048),
  del_flg numeric(1,0),
  register_datetime timestamp without time zone,
  register_user_id character varying(10),
  update_datetime timestamp without time zone,
  update_user_id character varying(10),
  CONSTRAINT uac_group_pkey PRIMARY KEY (group_id, group_comp_id)
)

CREATE TABLE uac_group_file
(
  group_id text NOT NULL,
  group_file_div text NOT NULL,
  file_id text NOT NULL,
  file_nm text,
  file_dir text,
  del_flg numeric(1,0),
  register_datetime timestamp without time zone,
  register_user_id character varying(10),
  update_datetime timestamp without time zone,
  update_user_id character varying(10),
  CONSTRAINT uac_group_file_pkey PRIMARY KEY (group_id, group_file_div, file_id)
)