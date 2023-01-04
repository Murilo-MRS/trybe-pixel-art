#!/bin/bash

### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'trybe-publisher' fornecido 
## pela Trybe. 

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path .vscode \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path README.md \
    --invert-paths --force --quiet

#-----Códigos ANSI para cores no terminal-------

RED='\033[0;31m'
YELLOW='\033[1;33m'
NO_COLOR='\033[0m'

echo 
echo -e "${YELLOW}Foi realizada uma limpeza GENÉRICA para este repositório."
echo "Isso aconteceu pois esse projeto ainda não possui sua própria configuração de limpeza."
echo  
echo -e "${RED}Lembre-se de apagar os testes da Trybe após o fim da operação.${NO_COLOR}"
echo  
