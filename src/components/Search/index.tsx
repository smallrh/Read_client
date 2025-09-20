import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { novels } from '../../data/novels';
import { Novel } from '../../types/novel';
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './styles';

interface SearchScreenProps {
    onNovelClick?: (novel: Novel) => void;
}

const { width } = Dimensions.get('window');

const SearchScreen: React.FC<SearchScreenProps> = ({ onNovelClick }) => {
    const { theme, isDarkMode } = useTheme();
    const styles = createStyles(theme);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Novel[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isAISearch, setIsAISearch] = useState(false);
    const [aiResults, setAIResults] = useState<any[]>([]);

    const hotSearches = [
        { keyword: '修仙', trend: '+20%' },
        { keyword: '霸道总裁', trend: '+15%' },
        { keyword: '末世', trend: '+35%' },
        { keyword: '重生', trend: '+8%' },
        { keyword: '穿越', trend: '+25%' },
        { keyword: '机甲', trend: '+12%' }
    ];

    const recentSearches = ['修仙从养鸡开始', '霸道总裁的小娇妻', '末世重生'];

    const categories = [
        { name: '玄幻', color: '#8b5cf6', icon: '⚡' },
        { name: '言情', color: '#ec4899', icon: '💕' },
        { name: '都市', color: '#06b6d4', icon: '🏙️' },
        { name: '历史', color: '#f59e0b', icon: '📚' },
        { name: '科幻', color: '#10b981', icon: '🚀' },
        { name: '悬疑', color: '#6366f1', icon: '🔍' }
    ];

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim()) {
            setIsSearching(true);
            
            if (isAISearch) {
                // AI搜索逻辑
                setTimeout(() => {
                    // 基于搜索词智能匹配相关小说
                    const getRecommendations = (searchQuery: string) => {
                        const query_lower = searchQuery.toLowerCase();
                        let recommendations = [];
                        
                        // 根据不同关键词推荐不同的书籍组合
                        if (query_lower.includes('修仙') || query_lower.includes('玄幻')) {
                            recommendations = [
                                {
                                    novel: novels.find(n => n.title.includes('修仙')) || novels[0],
                                    reason: '经典修仙题材，情节跌宕起伏，修炼体系完整',
                                    confidence: 95
                                },
                                {
                                    novel: novels.find(n => n.category === '玄幻') || novels[1],
                                    reason: '玄幻世界观宏大，法术体系丰富多样',
                                    confidence: 88
                                },
                                {
                                    novel: novels.find(n => n.tags?.includes('仙侠')) || novels[2],
                                    reason: '仙侠风格浓厚，侠义精神与修仙完美结合',
                                    confidence: 82
                                }
                            ];
                        } else if (query_lower.includes('霸道') || query_lower.includes('总裁')) {
                            recommendations = [
                                {
                                    novel: novels.find(n => n.title.includes('霸道') || n.title.includes('总裁')) || novels[3],
                                    reason: '经典霸总文，剧情甜宠，情感线丰富',
                                    confidence: 92
                                },
                                {
                                    novel: novels.find(n => n.category === '言情') || novels[4],
                                    reason: '都市言情背景，现代职场与爱情完美融合',
                                    confidence: 85
                                },
                                {
                                    novel: novels.find(n => n.tags?.includes('甜宠')) || novels[5],
                                    reason: '甜宠情节温馨治愈，人物性格鲜明',
                                    confidence: 79
                                }
                            ];
                        } else if (query_lower.includes('末世') || query_lower.includes('重生')) {
                            recommendations = [
                                {
                                    novel: novels.find(n => n.title.includes('末世') || n.title.includes('重生')) || novels[6],
                                    reason: '末世重生题材，生存与成长并重',
                                    confidence: 90
                                },
                                {
                                    novel: novels.find(n => n.category === '科幻') || novels[7],
                                    reason: '科幻元素丰富，未来世界设定新颖',
                                    confidence: 83
                                },
                                {
                                    novel: novels.find(n => n.tags?.includes('系统')) || novels[8],
                                    reason: '系统流设定有趣，升级爽感十足',
                                    confidence: 76
                                }
                            ];
                        } else {
                            // 默认推荐热门书籍
                            recommendations = [
                                {
                                    novel: novels[0],
                                    reason: '热门推荐，口碑极佳，适合您的阅读偏好',
                                    confidence: 88
                                },
                                {
                                    novel: novels[1],
                                    reason: '经典作品，情节引人入胜，值得一读',
                                    confidence: 84
                                },
                                {
                                    novel: novels[2],
                                    reason: '优质内容，文笔流畅，深受读者喜爱',
                                    confidence: 80
                                }
                            ];
                        }
                        
                        return recommendations.slice(0, 3); // 最多推荐3本
                    };
                    
                    const recommendations = getRecommendations(query);
                    
                    const mockAIResults = [
                        {
                            id: 'ai_1',
                            type: 'ai_recommendation',
                            title: 'AI智能推荐',
                            description: `基于您的搜索"${query}"，AI为您推荐以下相关内容：`,
                            recommendations,
                            analysis: {
                                searchIntent: `用户可能在寻找与"${query}"相关的高质量小说作品`,
                                suggestedGenres: query.includes('修仙') ? ['玄幻', '修仙', '仙侠'] :
                                              query.includes('霸道') ? ['言情', '都市', '甜宠'] :
                                              query.includes('末世') ? ['科幻', '末世', '重生'] :
                                              ['热门', '精品', '推荐'],
                                relatedKeywords: query.includes('修仙') ? ['修炼', '灵气', '法术', '仙界'] :
                                               query.includes('霸道') ? ['总裁', '甜宠', '都市', '职场'] :
                                               query.includes('末世') ? ['重生', '系统', '异能', '生存'] :
                                               ['热门', '精品', '好评', '推荐']
                            }
                        }
                    ];
                    setAIResults(mockAIResults);
                    setSearchResults([]);
                    setIsSearching(false);
                }, 1200);
            } else {
                // 普通搜索逻辑
                setTimeout(() => {
                    const results = novels.filter(novel =>
                        novel.title.toLowerCase().includes(query.toLowerCase()) ||
                        novel.author.toLowerCase().includes(query.toLowerCase()) ||
                        novel.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
                    );
                    setSearchResults(results);
                    setAIResults([]);
                    setIsSearching(false);
                }, 800);
            }
        } else {
            setSearchResults([]);
            setAIResults([]);
            setIsSearching(false);
        }
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setAIResults([]);
        setIsSearching(false);
    };

    const toggleAISearch = () => {
        setIsAISearch(!isAISearch);
        // 如果有当前搜索，重新执行搜索
        if (searchQuery.trim()) {
            handleSearch(searchQuery);
        }
    };

    const handleNovelPress = (novel: Novel) => {
        if (onNovelClick) {
            onNovelClick(novel);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={theme.background} />

            {/* Enhanced Search Header */}
            <View style={styles.searchHeader}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>发现好书</Text>

                    {/* Search Bar */}
                    <View style={styles.searchBarContainer}>
                        <View style={styles.searchBar}>
                            <MaterialIcon name="search" size={20} color={theme.primary} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder={isAISearch ? "AI智能搜索..." : "搜索小说、作者或标签..."}
                                placeholderTextColor={theme.textMuted}
                                value={searchQuery}
                                onChangeText={handleSearch}
                            />
                            {searchQuery ? (
                                <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
                                    <MaterialIcon name="close" size={20} color={theme.primary} />
                                </TouchableOpacity>
                            ) : null}
                        </View>
                        
                        {/* AI Search Toggle */}
                        <TouchableOpacity 
                            onPress={toggleAISearch} 
                            style={[styles.aiToggleButton, isAISearch && styles.aiToggleButtonActive]}
                            activeOpacity={0.8}
                        >
                            <MaterialIcon 
                                name="auto-awesome" 
                                size={18} 
                                color={isAISearch ? theme.surface : theme.primary} 
                            />
                            <Text style={[styles.aiToggleText, isAISearch && styles.aiToggleTextActive]}>
                                AI
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Search Results */}
            {searchQuery && (
                <ScrollView style={styles.resultsContainer}>
                    {isSearching ? (
                        <View style={styles.loadingContainer}>
                            <View style={styles.loadingIcon}>
                                <ActivityIndicator size="large" color={theme.primary} />
                            </View>
                            <Text style={styles.loadingText}>
                                {isAISearch ? 'AI正在分析中...' : '搜索中...'}
                            </Text>
                        </View>
                    ) : aiResults.length > 0 ? (
                        // AI搜索结果
                        <View style={styles.resultsContent}>
                            {aiResults.map((aiResult) => (
                                <View key={aiResult.id} style={styles.aiResultContainer}>
                                    {/* AI搜索标识 */}
                                    <View style={styles.aiResultHeader}>
                                        <View style={styles.aiLabel}>
                                            <MaterialIcon name="auto-awesome" size={16} color={theme.primary} />
                                            <Text style={styles.aiLabelText}>{aiResult.title}</Text>
                                        </View>
                                    </View>
                                    
                                    {/* AI分析描述 */}
                                    <Text style={styles.aiDescription}>{aiResult.description}</Text>
                                    
                                    {/* AI分析结果 */}
                                    <View style={styles.aiAnalysisCard}>
                                        <Text style={styles.aiAnalysisTitle}>搜索意图分析</Text>
                                        <Text style={styles.aiAnalysisText}>{aiResult.analysis.searchIntent}</Text>
                                        
                                        <View style={styles.aiKeywords}>
                                            <Text style={styles.aiKeywordsTitle}>相关关键词：</Text>
                                            <View style={styles.keywordsList}>
                                                {aiResult.analysis.relatedKeywords.map((keyword: string, index: number) => (
                                                    <TouchableOpacity 
                                                        key={index}
                                                        style={styles.keywordTag}
                                                        onPress={() => handleSearch(keyword)}
                                                    >
                                                        <Text style={styles.keywordText}>{keyword}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>
                                    </View>
                                    
                                    {/* AI推荐小说 */}
                                    <View style={styles.aiRecommendations}>
                                        <Text style={styles.recommendationTitle}>智能推荐</Text>
                                        {aiResult.recommendations.map((rec: any, index: number) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={styles.aiRecommendationItem}
                                                onPress={() => handleNovelPress(rec.novel)}
                                                activeOpacity={0.7}
                                            >
                                                <Image
                                                    source={{ uri: rec.novel.cover }}
                                                    style={styles.resultCover}
                                                />
                                                <View style={styles.aiRecommendationInfo}>
                                                    <Text style={styles.resultTitle} numberOfLines={1}>
                                                        {rec.novel.title}
                                                    </Text>
                                                    <Text style={styles.resultAuthor} numberOfLines={1}>
                                                        {rec.novel.author}
                                                    </Text>
                                                    <Text style={styles.aiRecommendationReason} numberOfLines={2}>
                                                        {rec.reason}
                                                    </Text>
                                                    <View style={styles.aiConfidence}>
                                                        <Text style={styles.confidenceText}>
                                                            匹配度: {rec.confidence}%
                                                        </Text>
                                                        <View style={styles.confidenceBar}>
                                                            <View 
                                                                style={[
                                                                    styles.confidenceProgress, 
                                                                    { width: `${rec.confidence}%` }
                                                                ]} 
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    ) : searchResults.length > 0 ? (
                        <View style={styles.resultsContent}>
                            <View style={styles.resultsHeader}>
                                <Text style={styles.resultsTitle}>
                                    搜索结果 <Text style={styles.resultsCount}>({searchResults.length})</Text>
                                </Text>
                            </View>

                            <View style={styles.resultsList}>
                                {searchResults.map((novel) => (
                                    <TouchableOpacity
                                        key={novel.id}
                                        style={styles.resultItem}
                                        onPress={() => handleNovelPress(novel)}
                                        activeOpacity={0.7}
                                    >
                                        <Image
                                            source={{ uri: novel.cover }}
                                            style={styles.resultCover}
                                        />
                                        <View style={styles.resultInfo}>
                                            <Text style={styles.resultTitle} numberOfLines={1}>
                                                {novel.title}
                                            </Text>
                                            <Text style={styles.resultAuthor} numberOfLines={1}>
                                                {novel.author}
                                            </Text>
                                            <View style={styles.resultMeta}>
                                                <View style={styles.ratingContainer}>
                                                    <MaterialIcon name="star" size={14} color="#f59e0b" />
                                                    <Text style={styles.rating}>{novel.rating}</Text>
                                                </View>
                                                <Text style={styles.chapters}>{novel.chapters}章</Text>
                                            </View>
                                            <View style={styles.categoryContainer}>
                                                <View style={styles.categoryBadge}>
                                                    <Text style={styles.categoryText}>{novel.category}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ) : (
                        <View style={styles.noResultsContainer}>
                            <View style={styles.noResultsIcon}>
                                <MaterialIcon name="search" size={32} color={theme.textMuted} />
                            </View>
                            <Text style={styles.noResultsTitle}>没有找到相关小说</Text>
                            <Text style={styles.noResultsSubtitle}>试试其他关键词或浏览热门推荐</Text>
                            <TouchableOpacity style={styles.retryButton} onPress={clearSearch}>
                                <Text style={styles.retryButtonText}>重新搜索</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
            )}

            {/* No Search Query - Show Discovery Content */}
            {!searchQuery && (
                <ScrollView style={styles.discoveryContainer} showsVerticalScrollIndicator={false}>
                    {/* Categories */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>热门分类</Text>
                        <View style={styles.categoriesGrid}>
                            {categories.map((category) => (
                                <TouchableOpacity
                                    key={category.name}
                                    style={[styles.categoryCard, { borderColor: category.color + '20' }]}
                                    onPress={() => handleSearch(category.name)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                                    <Text style={styles.categoryName}>{category.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Hot Searches */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <MaterialIcon name="trending-up" size={20} color={theme.primary} />
                            <Text style={styles.sectionTitle}>热门搜索</Text>
                        </View>
                        <View style={styles.hotSearchCard}>
                            <View style={styles.hotSearchGrid}>
                                {hotSearches.map((item, index) => (
                                    <TouchableOpacity
                                        key={item.keyword}
                                        style={styles.hotSearchItem}
                                        onPress={() => handleSearch(item.keyword)}
                                        activeOpacity={0.7}
                                    >
                                        <View style={styles.hotSearchContent}>
                                            <View style={styles.hotSearchLeft}>
                                                <Text style={styles.hotSearchRank}>{index + 1}</Text>
                                                <Text style={styles.hotSearchKeyword}>{item.keyword}</Text>
                                            </View>
                                            <Text style={styles.hotSearchTrend}>{item.trend}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>

                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <MaterialIcon name="access-time" size={20} color={theme.textSecondary} />
                                <Text style={styles.sectionTitle}>最近搜索</Text>
                            </View>
                            <View style={styles.recentSearches}>
                                {recentSearches.map((search) => (
                                    <TouchableOpacity
                                        key={search}
                                        style={styles.recentSearchItem}
                                        onPress={() => handleSearch(search)}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.recentSearchText}>{search}</Text>
                                        <MaterialIcon name="search" size={14} color={theme.textSecondary} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Popular Novels */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>人气推荐</Text>
                        <View style={styles.popularNovelsGrid}>
                            {novels.slice(0, 6).map((novel) => (
                                <TouchableOpacity
                                    key={novel.id}
                                    style={styles.popularNovelCard}
                                    onPress={() => handleNovelPress(novel)}
                                    activeOpacity={0.7}
                                >
                                    <Image
                                        source={{ uri: novel.cover }}
                                        style={styles.popularNovelCover}
                                    />
                                    <View style={styles.popularNovelInfo}>
                                        <Text style={styles.popularNovelTitle} numberOfLines={2}>
                                            {novel.title}
                                        </Text>
                                        <Text style={styles.popularNovelAuthor} numberOfLines={1}>
                                            {novel.author}
                                        </Text>
                                        <View style={styles.popularNovelMeta}>
                                            <View style={styles.popularNovelRating}>
                                                <MaterialIcon name="star" size={12} color="#f59e0b" />
                                                <Text style={styles.popularNovelRatingText}>{novel.rating}</Text>
                                            </View>
                                            <Text style={styles.popularNovelChapters}>
                                                {novel.chapters}章
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </View>
    );
};

export default SearchScreen;