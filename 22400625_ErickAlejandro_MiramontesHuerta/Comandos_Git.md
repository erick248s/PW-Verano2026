20 COMANDOS GIT

1.git init

Descripción: Inicializa un nuevo repositorio Git local en la carpeta actual.

Caso de uso: Acabas de crear una carpeta en tu computadora para un nuevo proyecto de desarrollo y quieres empezar a controlar sus versiones.

2.git clone

Descripción: Descarga una copia exacta de un repositorio remoto (como GitHub o GitLab) a tu máquina local.

Caso de uso: Te unes a un nuevo equipo de trabajo y necesitas descargar el código del proyecto en tu computadora para empezar a programar.

3.git config

Descripción: Configura variables de entorno de Git, como tu nombre de usuario y correo electrónico.

Caso de uso: Es la primera vez que usas Git en una computadora nueva y necesitas identificarte para que tus cambios lleven tu nombre.

4.git status

Descripción: Muestra el estado actual del directorio de trabajo (qué archivos se modificaron, cuáles se van a guardar y cuáles no están bajo seguimiento).

Caso de uso: Llevas una hora programando y quieres ver exactamente qué archivos has modificado antes de guardarlos.

5.git add

Descripción: Añade los archivos modificados al área de preparación (Staging Area) para incluirlos en el próximo commit.

Caso de uso: Terminaste de modificar el archivo index.html y quieres prepararlo para guardarlo.

6.git commit

Descripción: Guarda permanentemente la captura instantánea (snapshot) de los archivos que están en el área de preparación en el historial de cambios.

Caso de uso: Terminaste de implementar la barra de navegación y quieres guardar ese avance con un mensaje descriptivo.

7.git diff

Descripción: Muestra las diferencias exactas de líneas de código entre los archivos modificados y su última versión guardada.

Caso de uso: No recuerdas exactamente qué líneas de código cambiaste dentro de un archivo de configuración y quieres revisarlas antes de hacer un git add.

8.git branch

Descripción: Lista, crea o elimina ramas. Sin argumentos, muestra las ramas locales de tu proyecto.

Caso de uso: Quieres ver en qué rama estás parado o quieres crear una nueva rama llamada login para trabajar en esa función sin alterar el código principal.

9.git checkout

Descripción: Permite cambiar de una rama a otra o restaurar archivos del árbol de trabajo. Nota: En versiones modernas de Git se prefiere git switch para cambiar de rama.

Caso de uso: Quieres dejar de trabajar en la rama principal (main) y moverte a la rama login que creaste antes.

10.git switch

Descripción: Un comando más específico y moderno para cambiar entre ramas existentes o crear nuevas ramas.

Caso de uso: Quieres crear una rama nueva llamada fix-bug y moverte a ella inmediatamente.

11.git merge

Descripción: Fusiona el historial de una rama dentro de la rama en la que te encuentras actualmente.

Caso de uso: Terminaste la función de login en su respectiva rama, vuelves a la rama main y fusionas los cambios para que el código final quede unificado.

12.git remote

Descripción: Administra el conjunto de repositorios remotos conectados a tu repositorio local.

Caso de uso: Quieres verificar a qué URL de GitHub está conectado tu proyecto local.

13.git push

Descripción: Sube tus commits locales desde tu rama actual hacia el repositorio remoto (como GitHub).

Caso de uso: Guardaste tus cambios localmente y quieres subirlos a GitHub para que tus compañeros de equipo puedan verlos y revisarlos.

14.git fetch

Descripción: Descarga el historial y los cambios del repositorio remoto, pero no los fusiona con tu código de trabajo actual.

Caso de uso: Quieres ver si tus compañeros han subido cambios a GitHub, pero no quieres que alteren tu código local todavía.

15.git pull

Descripción: Descarga los cambios del repositorio remoto y los fusiona inmediatamente con tu rama actual (es una combinación de git fetch + git merge).

Caso de uso: Empiezas tu jornada de trabajo y quieres actualizar tu computadora local con los últimos cambios que tu equipo subió ayer a la rama principal.

16.git log

Descripción: Muestra el historial de commits realizados en el proyecto, incluyendo autor, fecha y el mensaje descriptivo.

Caso de uso: Quieres buscar quién hizo un cambio específico la semana pasada y leer el mensaje del commit para entender por qué lo hizo.

17.git stash

Descripción: Almacena temporalmente los cambios modificados que aún no se han guardado en un commit, dejando el directorio de trabajo limpio.

Caso de uso: Estás a mitad de programar algo en la rama login, pero te piden arreglar un error urgente en main. Guardas tus cambios a medias con stash, vas a reparar el error, y luego regresas a recuperarlos con git stash pop.

18.git reset

Descripción: Restablece el estado actual a un commit específico. Puede mover el puntero e incluso borrar cambios (si se usa con --hard).

Caso de uso: Añadiste archivos al área de preparación por error usando git add y quieres sacarlos de ahí sin perder el código que escribiste.

19.git revert

Descripción: Crea un nuevo commit que deshace exactamente los cambios de un commit anterior, manteniendo el historial intacto (ideal para proyectos compartidos).

Caso de uso: Te das cuenta de que el commit que subiste ayer rompió la base de datos; usas revert para generar un commit que deshaga ese error de forma segura en el servidor.

20.git rm

Descripción: Elimina archivos del directorio de trabajo y del índice de Git (el seguimiento).

Caso de uso: Tienes un archivo de pruebas viejo que ya no sirve para nada y quieres borrarlo físicamente del disco y asegurarte de que Git no lo busque más.
