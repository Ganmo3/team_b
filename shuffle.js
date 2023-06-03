const names = ['小野李野', '田邉龍二', '生田菜緒', '伴俊和', '加藤真規'];

while (names.length > 0) {
  // インデックスのランダム作成
  const randomIndex = Math.floor(Math.random() * names.length);

  const randomName = names[randomIndex];

  alert(randomName);

  // 表示した名前1つを配列から削除する
  names.splice(randomIndex, 1);
}