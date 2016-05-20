VERSION=0.0.0
NOMBRE="ember-blockly"

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
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}init${N}              Instala dependencias."
	@echo "    ${G}update_blockly${N}    Actualiza la versión de blockly."
	@echo ""

init:
	$(call task, "Iniciando el proyecto.")
	$(call log, "Instalando dependencias.")
	@git submodule update --init

update_blockly:
	$(call task, "Actualizando blockly.")
	$(call log, "Actualizando subrepositorio blockly.")
	@git submodule update --init
	$(call log, "Copiando archivos al directorio vendor.")
	@cp blockly/blockly_compressed.js vendor
	@cp blockly/blocks_compressed.js  vendor

.PHONY: tmp
