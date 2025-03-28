import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

// Nội dung chi tiết môn học (mock data)
const COURSE_DETAILS = {
  '1': {
    description: 'Khóa học giúp sinh viên hiểu về cách phát triển ứng dụng di động đa nền tảng sử dụng React Native. Nắm vững kiến thức về JavaScript, React và các thư viện quan trọng.',
    topics: [
      'Giới thiệu về React Native',
      'Component và Props',
      'State và Lifecycle',
      'Xử lý sự kiện',
      'Styling và Layout',
      'Navigation',
      'Quản lý State với Redux',
      'Tương tác với API',
      'Tối ưu hóa hiệu suất',
      'Triển khai ứng dụng'
    ],
    schedule: 'Thứ 2, 4, 6 (14:00 - 16:00)',
    room: 'E303'
  },
  '2': {
    description: 'Môn học cung cấp kiến thức cơ bản về cơ sở dữ liệu quan hệ, ngôn ngữ truy vấn SQL và thiết kế cơ sở dữ liệu.',
    topics: [
      'Giới thiệu về CSDL',
      'Mô hình ER',
      'Chuẩn hóa CSDL',
      'Ngôn ngữ SQL cơ bản',
      'SQL nâng cao',
      'Stored Procedure',
      'Transaction và Concurrency',
      'Bảo mật CSDL',
      'NoSQL và xu hướng CSDL mới'
    ],
    schedule: 'Thứ 3, 5 (8:00 - 10:00)',
    room: 'B205'
  },
  '3': {
    description: 'Khóa học tập trung vào việc phát triển ứng dụng web sử dụng HTML, CSS, JavaScript và các framework hiện đại.',
    topics: [
      'HTML5 và CSS3',
      'JavaScript cơ bản',
      'DOM và jQuery',
      'Responsive Design',
      'Frontend Framework (React)',
      'Backend với Node.js',
      'RESTful API',
      'Database Integration',
      'Bảo mật Web',
      'Triển khai ứng dụng Web'
    ],
    schedule: 'Thứ 2, 4 (9:30 - 11:30)',
    room: 'A201'
  },
  '4': {
    description: 'Giới thiệu về các nguyên tắc và kỹ thuật của AI, bao gồm học máy, học sâu và xử lý ngôn ngữ tự nhiên.',
    topics: [
      'Giới thiệu về AI',
      'Giải quyết vấn đề bằng tìm kiếm',
      'Học máy cơ bản',
      'Decision Trees và Random Forests',
      'Neural Networks',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'Ứng dụng AI trong thực tế'
    ],
    schedule: 'Thứ 3, 6 (13:00 - 15:00)',
    room: 'D404'
  },
  '5': {
    description: 'Môn học cung cấp kiến thức về bảo mật thông tin, phòng chống tấn công mạng và các kỹ thuật mã hóa.',
    topics: [],
    schedule: 'Thứ 4, 6 (15:30 - 17:30)',
    room: 'C302'
  }
};

// Thêm dữ liệu chi tiết mặc định cho các khóa học còn lại
for (let i = 6; i <= 8; i++) {
  COURSE_DETAILS[i] = {
    description: 'Thông tin chi tiết về khóa học này sẽ được cập nhật sớm.',
    topics: ['Đang cập nhật nội dung...'],
    schedule: 'Đang cập nhật',
    room: 'Đang cập nhật'
  };
}

const CourseDetailsScreen = ({ route, navigation }) => {
  // Truy cập các tham số từ route.params
  const { course, userId } = route.params;
  console.log('User ID:', userId); // Log để demo việc truy cập route.params
  
  const details = COURSE_DETAILS[course.id] || {
    description: 'Không có thông tin chi tiết.',
    topics: [],
    schedule: 'Chưa có lịch học',
    room: 'Chưa phân phòng'
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{course.title}</Text>
          <Text style={styles.instructorName}>Giảng viên: {course.instructor}</Text>
          <View style={styles.creditsContainer}>
            <Text style={styles.creditsText}>{course.credits} tín chỉ</Text>
          </View>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Mô tả khóa học</Text>
          <Text style={styles.description}>{details.description}</Text>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Lịch học</Text>
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleText}>Thời gian: {details.schedule}</Text>
            <Text style={styles.scheduleText}>Phòng: {details.room}</Text>
          </View>
        </View>
        
        {details.topics && details.topics.length > 0 && (
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Nội dung học</Text>
            {details.topics.map((topic, index) => (
              <View key={index} style={styles.topicItem}>
                <Text style={styles.topicNumber}>{index + 1}</Text>
                <Text style={styles.topicText}>{topic}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    padding: 20,
    backgroundColor: '#4285F4',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  instructorName: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  creditsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  creditsText: {
    color: 'white',
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  scheduleContainer: {
    backgroundColor: '#f0f4f8',
    padding: 12,
    borderRadius: 8,
  },
  scheduleText: {
    fontSize: 15,
    marginBottom: 8,
    color: '#444',
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  topicNumber: {
    backgroundColor: '#4285F4',
    color: 'white',
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
  topicText: {
    flex: 1,
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  backButton: {
    backgroundColor: '#4285F4',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CourseDetailsScreen;