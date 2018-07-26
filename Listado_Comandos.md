
## Cuando usamos en git - significa que va una letra
## Cuando usamos en git -- significa que va una palabra

## Comandos Git
## Version de git
git --version
#  Ayuda en git
git help
git help commit

# Configuracion basica de git
git config  --global user.name "Jaime A. Peredo Botello"
git config  --global user.email "jperedo@tgv.com.ar"

## Verificar la configuracion global de git 
# Este comando permite editar y modificar la configuracion
git config --global -e
# Este comando permite solo listar (mostrar) la configuracion
git config --global -l

## Inicializamos git en nuestro proyecto
git init

## Verificar el estado de los archivos
git status
git status -s
# -b de Branch
git status -s -b

## Preparar los archivos para agregarlos al stage ##
git add .
# Agrega todos los archivos al stage
git add -A 
git add -all
git add <lista de archivos>
gid add Nombre_Archivo.extension
git add *.png
git add directorio/ ( git add ccs/)
# Agrega todos los txt de TODO el proyecto
git add "*.txt"
# Agrega todos los txt del directorio actual del proyecto
git add *.txt 
# Agrega todos los PDF´s de la carpeta PDF
git add PDF/*.pdf

## Quitar un archivo, para no agregarlo al stage
git reset *.xml

## Agregamos los archivos al repositorio del proyecto
git commit -m "mensaje"

## Revertir el proyecto al ultimo commit realizado en el repositorio 
git checkout -- .

## Historial o Log de lo realizado en nuestro repositorio
git log
git log --oneline
git log --oneline --decorate --all --graph

## Crear Alias en git
git config --global alias.Nombre_Alias "comandos git"
git config --global alias.lg "log --oneline --decorate --all --graph"
# A continuacion un alias que recibe los comandos de status separados o juntos
git config --global alias.s "status -s -b"
git config --global alias.s "status -sb"


## Agregar un repositorio remoto para subir nuestros cambios
git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git
git push -u origin master


## Ver repositorios remotos configurados en mi proyecto
git remote -v

## quitar repositorio remoto/origen
git remote rm destination/origin

# Revertir el proyecto al ultimo commit realizado en el repositorio 
git checkout -- .

#También podemos llevar no sólo un archivo a un punto predeterminado, si no todos los archivos del repositorio, para ello escribimos:
git checkout 55df4c2

# Descargar un repositorio
git clone git://github.com/schacon/grit.git