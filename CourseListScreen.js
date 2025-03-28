import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

// Mock data cho danh sách khóa học
const COURSES = [
  { id: '1', title: 'Lập trình React Native', credits: 4, instructor: 'Nguyễn Văn A' },
  { id: '2', title: 'Cơ sở dữ liệu', credits: 3, instructor: 'Trần Thị B' },
  { id: '3', title: 'Lập trình Web', credits: 4, instructor: 'Lê Văn C' },
  { id: '4', title: 'Trí tuệ nhân tạo', credits: 3, instructor: 'Phạm Thị D' },
  { id: '5', title: 'An toàn mạng', credits: 3, instructor: 'Hoàng Văn E' },
  { id: '6', title: 'Kỹ thuật phần mềm', credits: 4, instructor: 'Ngô Thị F' },
  { id: '7', title: 'Hệ điều hành', credits: 3, instructor: 'Lý Văn G' },
  { id: '8', title: 'Mạng máy tính', credits: 4, instructor: 'Dương Thị H' },
];

const CourseListScreen = ({ navigation, route }) => {
  // Truy cập dữ liệu người dùng từ route.params
  const { userId, userName } = route.params || { userId: '0', userName: 'Khách' };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.courseItem}
      onPress={() => navigation.navigate('CourseDetails', { 
        course: item,
        userId: userId // Truyền thêm userId để demo cách truyền nhiều dữ liệu
      })}
    >
      <View style={styles.courseContent}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseInfo}>Giảng viên: {item.instructor}</Text>
        <Text style={styles.courseInfo}>Số tín chỉ: {item.credits}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh sách môn học</Text>
        <Text style={styles.welcomeText}>Xin chào, {userName}</Text>
      </View>
      
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.logoutButtonText}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4285F4',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  listContent: {
    padding: 16,
  },
  courseItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  courseContent: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  courseInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  logoutButton: {
    margin: 16,
    backgroundColor: '#f44336',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CourseListScreen;