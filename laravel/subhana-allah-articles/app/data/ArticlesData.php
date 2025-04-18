<?php
namespace App\Data;
class ArticlesData
{
 /**
 * Retourne la liste de tous les articles
 */
 public static function getArticles(): array
 {
 return [
 1 => [
 'id' => 1,
 'title' => 'Introduction à Laravel',
 'slug' => 'introduction-a-laravel',
 'content' => "Laravel est un framework PHP élégant qui
facilite le développement d'applications web en fournissant une structure
claire et des outils puissants.\n\nIl offre un routeur simple, un ORM
puissant (Eloquent), un moteur de template (Blade), et bien d'autres
fonctionnalités...",
 'author' => 'Marie Dupont',
 'published_at' => '2025-03-15',
 'category' => 'Framework',
 'summary' => 'Découvrez pourquoi Laravel est le framework
PHP le plus populaire',
 'tags' => ['PHP', 'Laravel', 'Framework', 'Web']
 ],
 2 => [
 'id' => 2,
 'title' => 'Les bases du routage dans Laravel',
 'slug' => 'les-bases-du-routage-dans-laravel',
 'content' => "Le routage est un concept fondamental dans
Laravel. Il permet de définir les URLs de votre application et de les
associer à des contrôleurs ou des fonctions anonymes.\n\nLes routes
peuvent être définies pour différentes méthodes HTTP (GET, POST, PUT,
DELETE) et peuvent contenir des paramètres...",
 'author' => 'Jean Martin',
 'published_at' => '2025-03-20',
 'category' => 'Laravel',
 'summary' => 'Apprenez à créer et organiser les routes de
votre application Laravel',
 'tags' => ['Laravel', 'Routing', 'URL', 'HTTP']
 ],
 3 => [
 'id' => 3,
 'title' => 'Les contrôleurs dans Laravel',
 'slug' => 'les-controleurs-dans-laravel',
 'content' => "Les contrôleurs permettent d'organiser la
logique de votre application en regroupant le traitement des requêtes HTTP
dans des classes.\n\nIls sont stockés dans le dossier app/Http/Controllers
et peuvent être générés facilement via Artisan. Un contrôleur peut
contenir plusieurs méthodes, chacune associée à une route spécifique...",
 'author' => 'Marie Dupont',
 'published_at' => '2025-03-25',
 'category' => 'Laravel',
 'summary' => 'Structurez votre application avec les
contrôleurs Laravel',
 'tags' => ['Laravel', 'Contrôleurs', 'MVC',
'Architecture']
 ],
 4 => [
 'id' => 4,
 'title' => 'Sécurisation d\'une API avec Laravel Sanctum',
 'slug' => 'securisation-api-avec-laravel-sanctum',
 'content' => "Laravel Sanctum est une solution légère pour
l'authentification API. Il offre plusieurs façons d'authentifier les
utilisateurs, notamment via des tokens d'API ou des cookies de
session.\n\nLes tokens peuvent être générés pour les utilisateurs et
inclus dans les en-têtes HTTP pour authentifier les requêtes API...",
 'author' => 'Paul Dubois',
 'published_at' => '2025-04-05',
 'category' => 'Sécurité',
 'summary' => 'Protégez vos API grâce à Laravel Sanctum',
 'tags' => ['API', 'Sécurité', 'Laravel', 'Sanctum',
'Authentification']
 ],
 5 => [
 'id' => 5,
 'title' => 'Optimisation des performances dans Laravel',
 'slug' => 'optimisation-des-performances-dans-laravel',
 'content' => "L'optimisation des performances est cruciale
pour offrir une expérience utilisateur fluide. Laravel propose plusieurs
outils pour améliorer les performances de votre application.\n\nLe cache,
la mise en file d'attente des tâches, l'optimisation des requêtes Eloquent
et la compilation des vues Blade sont quelques-unes des techniques que
vous pouvez utiliser...",
 'author' => 'Sophie Moreau',
 'published_at' => '2025-04-10',
 'category' => 'Performance',
 'summary' => 'Techniques pour accélérer vos applications
Laravel',
 'tags' => ['Performance', 'Optimisation', 'Cache',
'Laravel']
 ],
 ];
 }
 /**
 * Retourne un article par son ID
 */
 public static function getArticleById(int $id): ?array
 {
 $articles = self::getArticles();
 return $articles[$id] ?? null;
 }
 /**
 * Retourne un article par son slug
 */
 public static function getArticleBySlug(string $slug): ?array
 {
 foreach (self::getArticles() as $article) {
 if ($article['slug'] === $slug) {
 return $article;
 }
 }
 return null;
 }
 /**
  * Retourne les articles d'une certaine catégorie
 */
 public static function getArticlesByCategory(string $category): array
 {
 return array_filter(self::getArticles(), function($article) use
($category) {
 return $article['category'] === $category;
 });
 }
 /**
 * Retourne les catégories disponibles
 */
 public static function getCategories(): array
 {
 $categories = [];
 foreach (self::getArticles() as $article) {
 if (!in_array($article['category'], $categories)) {
 $categories[] = $article['category'];
 }
 }
 return $categories;
 }
 /**
 * Retourne les tags disponibles
 */
 public static function getTags(): array
 {
 $tags = [];
 foreach (self::getArticles() as $article) {
 foreach ($article['tags'] as $tag) {
 if (!in_array($tag, $tags)) {
 $tags[] = $tag;
 }
 }
 }
 return $tags;
 }
}
