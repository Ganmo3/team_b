names = ["小野 李野", "田邉 龍二", "生田 菜緒子", "伴 俊和", "加藤 真規"]
result = names.shuffle

for i in 0...result.length
  puts "#{i+1}: #{result[i]}"
end