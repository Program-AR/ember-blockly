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
	@echo "    ${G}version${N}           Publica una versión nueva."
	@echo "    "
	@echo "    nota: el deploy se realiza automáticamente desde travis"
	@echo "          a la siguiente URL: http://ember-blockly.surge.sh"
	@echo ""

init:
	$(call task, "Iniciando el proyecto.")
	$(call log, "Instalando dependencias.")
	@npm install
	@bower install

version:
	npm version patch
	npm publish

.PHONY: tmp
