NOMBRE="ember-blockly"
VERSION=$(shell git describe --tags $(git rev-list --tags --max-count=1))

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m

define log
	@echo " ${G}▷$(1) ${N}"
endef

define task
	@echo "${Y}-$(1)${N}"
endef

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE} (versión: ${VERSION})${N}"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}init${N}              Instala dependencias."
	@echo "    ${G}update_blockly${N}    Actualiza la versión de blockly."
	@echo "    ${G}sync_blockly${N}      Sincroniza los cambios de blockly."
	@echo "    ${G}deploy${N}            Sube la demo a gitpages."
	@echo ""

init:
	$(call task, "Iniciando el proyecto.")
	$(call log, "Instalando dependencias.")
	@git submodule update --init

copy_blockly:
	$(call task, "Actualizando blockly.")
	$(call log, "Copiando archivos al directorio vendor.")
	@cp blockly/blockly_compressed.js vendor
	@cp blockly/blocks_compressed.js  vendor
	@cp blockly/msg/js/es.js vendor
	$(call log, "Recorda llamar al comando sync_blockly para subir los cambios al repositorio")

pull_blockly:
	$(call task, "Obteniendo cambios del repositorio de blockly")
	cd blockly; git pull origin master

update_blockly: pull_blockly copy_blockly


sync_blockly:
	git add blockly
	git add vendor/blockly_compressed.js
	git add vendor/blocks_compressed.js
	git add vendor/es.js
	git commit -m "Actualizando blockly"
	git push


deploy:
	$(call task, "Realizando deploy.")
	@sh deploy.sh

.PHONY: tmp
